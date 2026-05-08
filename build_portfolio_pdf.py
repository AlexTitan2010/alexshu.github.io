from __future__ import annotations

import os
import re
from dataclasses import dataclass
from html.parser import HTMLParser
from typing import Iterable

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    Flowable,
    Frame,
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)
from PIL import Image as PILImage


ROOT = os.path.dirname(os.path.abspath(__file__))
OUTPUT = os.path.join(ROOT, "Alexandr_Shulyakovskiy_Portfolio.pdf")
PORTRAIT = os.path.join(ROOT, "assets", "Website_Portrait.jpg")
SITE = os.path.join(ROOT, "index.html")

BG = colors.HexColor("#0e0e0f")
BG2 = colors.HexColor("#141416")
PANEL = colors.HexColor("#1c1c1f")
PANEL_LIGHT = colors.HexColor("#242428")
GOLD = colors.HexColor("#e8a630")
GOLD_DIM = colors.HexColor("#a87520")
INK = colors.HexColor("#f0ede8")
MUTED = colors.HexColor("#a9a39a")
BORDER = colors.HexColor("#3b3022")
PAPER = colors.HexColor("#f7f4ee")
DARK_TEXT = colors.HexColor("#151515")
SOFT_TEXT = colors.HexColor("#4b4844")


@dataclass
class WorkItem:
    category: str
    title: str
    url: str


class WorkParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.in_work = False
        self.work_depth = 0
        self.current_category = ""
        self.in_category = False
        self.in_title = False
        self.current_link = ""
        self.buffer: list[str] = []
        self.items: list[WorkItem] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_dict = {key: value or "" for key, value in attrs}
        class_attr = attrs_dict.get("class", "")
        if tag == "section" and attrs_dict.get("id") == "work":
            self.in_work = True
            self.work_depth = 1
            return
        if not self.in_work:
            return
        if tag == "section":
            self.work_depth += 1
        if "work-group-tag" in class_attr:
            self.in_category = True
            self.buffer = []
        if tag == "a" and "work-link-card" in class_attr:
            self.current_link = attrs_dict.get("href", "")
        if "work-link-title" in class_attr:
            self.in_title = True
            self.buffer = []

    def handle_endtag(self, tag: str) -> None:
        if not self.in_work:
            return
        if self.in_category:
            text = clean_text(" ".join(self.buffer))
            if text:
                self.current_category = text
            self.in_category = False
            self.buffer = []
        elif self.in_title:
            title = clean_text(" ".join(self.buffer))
            if title and self.current_link:
                self.items.append(WorkItem(self.current_category, title, self.current_link))
            self.in_title = False
            self.current_link = ""
            self.buffer = []
        if tag == "section":
            self.work_depth -= 1
            if self.work_depth <= 0:
                self.in_work = False

    def handle_data(self, data: str) -> None:
        if self.in_category or self.in_title:
            self.buffer.append(data)


def clean_text(value: str) -> str:
    value = re.sub(r"\s+", " ", value).strip()
    return value


def parse_work_items() -> list[WorkItem]:
    parser = WorkParser()
    with open(SITE, "r", encoding="utf-8") as handle:
        parser.feed(handle.read())
    return parser.items


def register_fonts() -> tuple[str, str, str]:
    font_dir = "/System/Library/Fonts/Supplemental"
    regular = os.path.join(font_dir, "Arial.ttf")
    bold = os.path.join(font_dir, "Arial Bold.ttf")
    italic = os.path.join(font_dir, "Arial Italic.ttf")
    if all(os.path.exists(path) for path in (regular, bold, italic)):
        pdfmetrics.registerFont(TTFont("PortfolioSans", regular))
        pdfmetrics.registerFont(TTFont("PortfolioSans-Bold", bold))
        pdfmetrics.registerFont(TTFont("PortfolioSans-Italic", italic))
        return "PortfolioSans", "PortfolioSans-Bold", "PortfolioSans-Italic"
    return "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"


FONT, FONT_BOLD, FONT_ITALIC = register_fonts()


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "cover_kicker": ParagraphStyle(
            "cover_kicker",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=8.5,
            leading=11,
            textColor=GOLD,
            uppercase=True,
            spaceAfter=12,
        ),
        "cover_name": ParagraphStyle(
            "cover_name",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=35,
            leading=37,
            textColor=INK,
            spaceAfter=13,
        ),
        "cover_body": ParagraphStyle(
            "cover_body",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=11.2,
            leading=17,
            textColor=MUTED,
            spaceAfter=16,
        ),
        "cover_contact": ParagraphStyle(
            "cover_contact",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=8.5,
            leading=12,
            textColor=MUTED,
        ),
        "intro_name": ParagraphStyle(
            "intro_name",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=29,
            leading=33,
            textColor=INK,
            spaceAfter=8,
        ),
        "intro_body": ParagraphStyle(
            "intro_body",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=9.8,
            leading=13.8,
            textColor=MUTED,
            spaceAfter=8,
        ),
        "intro_contact": ParagraphStyle(
            "intro_contact",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=7.8,
            leading=10.5,
            textColor=MUTED,
        ),
        "h1": ParagraphStyle(
            "h1",
            parent=base["Heading1"],
            fontName=FONT_BOLD,
            fontSize=23,
            leading=27,
            textColor=INK,
            spaceBefore=0,
            spaceAfter=15,
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Heading2"],
            fontName=FONT_BOLD,
            fontSize=13,
            leading=16,
            textColor=GOLD,
            spaceBefore=8,
            spaceAfter=9,
        ),
        "h2_dark": ParagraphStyle(
            "h2_dark",
            parent=base["Heading2"],
            fontName=FONT_BOLD,
            fontSize=13,
            leading=16,
            textColor=GOLD_DIM,
            spaceBefore=8,
            spaceAfter=9,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["BodyText"],
            fontName=FONT,
            fontSize=9.8,
            leading=14.2,
            textColor=MUTED,
            spaceAfter=8,
        ),
        "body_dark": ParagraphStyle(
            "body_dark",
            parent=base["BodyText"],
            fontName=FONT,
            fontSize=9.6,
            leading=13.6,
            textColor=SOFT_TEXT,
            spaceAfter=7,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["BodyText"],
            fontName=FONT,
            fontSize=7.4,
            leading=10,
            textColor=MUTED,
        ),
        "small_dark": ParagraphStyle(
            "small_dark",
            parent=base["BodyText"],
            fontName=FONT,
            fontSize=7.4,
            leading=10,
            textColor=SOFT_TEXT,
        ),
        "metric_num": ParagraphStyle(
            "metric_num",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=19,
            leading=22,
            textColor=GOLD,
            alignment=TA_CENTER,
        ),
        "metric_label": ParagraphStyle(
            "metric_label",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=7.2,
            leading=9.2,
            textColor=MUTED,
            alignment=TA_CENTER,
        ),
        "metric_num_dark": ParagraphStyle(
            "metric_num_dark",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=16,
            leading=18,
            textColor=GOLD_DIM,
            alignment=TA_CENTER,
        ),
        "metric_label_dark": ParagraphStyle(
            "metric_label_dark",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=7.1,
            leading=9,
            textColor=SOFT_TEXT,
            alignment=TA_CENTER,
        ),
        "card_title": ParagraphStyle(
            "card_title",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=9.5,
            leading=12.4,
            textColor=INK,
            spaceAfter=4,
        ),
        "card_body": ParagraphStyle(
            "card_body",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=8.3,
            leading=11.3,
            textColor=MUTED,
        ),
        "project_title": ParagraphStyle(
            "project_title",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=8.6,
            leading=11.5,
            textColor=INK,
        ),
        "project_link": ParagraphStyle(
            "project_link",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=7.3,
            leading=9,
            textColor=GOLD,
            alignment=TA_RIGHT,
        ),
        "role": ParagraphStyle(
            "role",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=10.5,
            leading=13.5,
            textColor=INK,
            spaceAfter=2,
        ),
        "role_meta": ParagraphStyle(
            "role_meta",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=8,
            leading=10.5,
            textColor=GOLD,
            spaceAfter=6,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=8.7,
            leading=12.5,
            textColor=MUTED,
            leftIndent=12,
            firstLineIndent=-7,
            spaceAfter=4,
        ),
        "chip": ParagraphStyle(
            "chip",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=7.7,
            leading=10,
            textColor=INK,
            alignment=TA_CENTER,
        ),
        "ip_strip": ParagraphStyle(
            "ip_strip",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=8.1,
            leading=10.8,
            textColor=INK,
            alignment=TA_CENTER,
        ),
        "signature_tag": ParagraphStyle(
            "signature_tag",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=6.7,
            leading=8.5,
            textColor=GOLD,
        ),
        "signature_title": ParagraphStyle(
            "signature_title",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=7.7,
            leading=9.8,
            textColor=INK,
        ),
        "signature_link": ParagraphStyle(
            "signature_link",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=6.7,
            leading=8.5,
            textColor=GOLD,
            alignment=TA_RIGHT,
        ),
        "footer": ParagraphStyle(
            "footer",
            parent=base["Normal"],
            fontName=FONT,
            fontSize=7.2,
            leading=9,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
    }


STYLES = make_styles()


def p(text: str, style: str = "body") -> Paragraph:
    return Paragraph(text, STYLES[style])


def link(label: str, url: str, color: str = "#e8a630") -> str:
    return f'<link href="{url}"><font color="{color}">{label}</font></link>'


class AccentRule(Flowable):
    def __init__(self, color=GOLD, width=34 * mm, thickness=1.4):
        super().__init__()
        self.color = color
        self.width = width
        self.thickness = thickness
        self.height = 7

    def draw(self) -> None:
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 2, self.width, 2)


class SectionDivider(Flowable):
    def __init__(self, color=GOLD_DIM):
        super().__init__()
        self.color = color
        self.height = 13

    def draw(self) -> None:
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(0.6)
        self.canv.line(0, 6, self.width, 6)


class PortfolioDocTemplate(SimpleDocTemplate):
    def handle_flowable(self, flowables):
        super().handle_flowable(flowables)


def draw_page_chrome(canv: canvas.Canvas, doc: SimpleDocTemplate) -> None:
    page = doc.page
    width, height = A4
    canv.saveState()
    if page == 1:
        canv.setFillColor(BG)
        canv.rect(0, 0, width, height, stroke=0, fill=1)
        canv.setStrokeColor(BORDER)
        canv.setLineWidth(0.8)
        canv.line(18 * mm, 18 * mm, width - 18 * mm, 18 * mm)
    else:
        canv.setFillColor(BG2)
        canv.rect(0, 0, width, height, stroke=0, fill=1)
        canv.setStrokeColor(BORDER)
        canv.setLineWidth(0.7)
        canv.line(18 * mm, height - 15 * mm, width - 18 * mm, height - 15 * mm)
        canv.setFont(FONT, 7.2)
        canv.setFillColor(MUTED)
        canv.drawString(18 * mm, height - 12 * mm, "Alexandr Shulyakovskiy - Portfolio")
        canv.drawRightString(width - 18 * mm, height - 12 * mm, str(page))
        canv.setStrokeColor(BORDER)
        canv.line(18 * mm, 14 * mm, width - 18 * mm, 14 * mm)
        canv.setFillColor(MUTED)
        canv.drawRightString(width - 18 * mm, 10 * mm, "alexshu.com")
    canv.restoreState()


def stat_table(stats: Iterable[tuple[str, str]], dark: bool = False, col_width: float = 33 * mm) -> Table:
    num_style = "metric_num_dark" if dark else "metric_num"
    label_style = "metric_label_dark" if dark else "metric_label"
    data = []
    row = []
    for number, label in stats:
        row.append([p(number, num_style), p(label, label_style)])
    data.append(row)
    table = Table(data, colWidths=[col_width] * len(row), hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PANEL if not dark else colors.white),
                ("BOX", (0, 0), (-1, -1), 0.45, BORDER if not dark else colors.HexColor("#d9d2c6")),
                ("INNERGRID", (0, 0), (-1, -1), 0.45, BORDER if not dark else colors.HexColor("#d9d2c6")),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 9),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return table


def make_chip_table(items: list[str], columns: int = 3, col_width: float = 46 * mm) -> Table:
    rows = []
    for index in range(0, len(items), columns):
        row_items = items[index : index + columns]
        row = [p(item, "chip") for item in row_items]
        while len(row) < columns:
            row.append("")
        rows.append(row)
    table = Table(rows, colWidths=[col_width] * columns, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PANEL_LIGHT),
                ("BOX", (0, 0), (-1, -1), 0.35, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, BORDER),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return table


def project_table(items: list[WorkItem]) -> Table:
    data = []
    for item in items:
        title = link(item.title.replace("&", "&amp;"), item.url, "#f0ede8")
        watch = link("WATCH", item.url)
        data.append([p(title, "project_title"), p(watch, "project_link")])
    table = Table(data, colWidths=[129 * mm, 20 * mm], hAlign="LEFT", repeatRows=0)
    commands = [
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.35, BORDER),
        ("INNERGRID", (0, 0), (-1, -1), 0.25, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]
    for row in range(len(data)):
        if row % 2:
            commands.append(("BACKGROUND", (0, row), (-1, row), PANEL_LIGHT))
    table.setStyle(TableStyle(commands))
    return table


def split_by_category(items: list[WorkItem]) -> dict[str, list[WorkItem]]:
    grouped: dict[str, list[WorkItem]] = {}
    for item in items:
        grouped.setdefault(item.category, []).append(item)
    return grouped


SIGNATURE_URLS = [
    "https://www.youtube.com/watch?v=JiThtTg_5Nc",
    "https://www.youtube.com/watch?v=vX0I_0YIl_A",
    "https://www.youtube.com/watch?v=btDxd6pCq6E",
    "https://www.youtube.com/watch?v=samgsYd70h8",
    "https://www.youtube.com/watch?v=fqvGPcgGaws",
]


def selected_signature_items(items: list[WorkItem]) -> list[WorkItem]:
    by_url = {item.url: item for item in items}
    return [by_url[url] for url in SIGNATURE_URLS if url in by_url]


def ip_experience_strip() -> Table:
    text = (
        '<font color="#e8a630">Franchise / IP Experience:</font> '
        "The Walking Dead | UFC | Dune | Sony Pictures | World of Tanks Blitz"
    )
    table = Table([[p(text, "ip_strip")]], colWidths=[167 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PANEL),
                ("BOX", (0, 0), (-1, -1), 0.4, BORDER),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return table


def signature_work_table(items: list[WorkItem]) -> Table:
    rows = []
    for item in selected_signature_items(items):
        rows.append(
            [
                p(item.category.upper().replace("&", "&amp;"), "signature_tag"),
                p(link(item.title.replace("&", "&amp;"), item.url, "#f0ede8"), "signature_title"),
                p(link("WATCH", item.url), "signature_link"),
            ]
        )
    table = Table(rows, colWidths=[34 * mm, 113 * mm, 20 * mm], hAlign="LEFT")
    commands = [
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.35, BORDER),
        ("INNERGRID", (0, 0), (-1, -1), 0.25, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]
    for row in range(len(rows)):
        if row % 2:
            commands.append(("BACKGROUND", (0, row), (-1, row), PANEL_LIGHT))
    table.setStyle(TableStyle(commands))
    return table


def focus_table(cards: list[tuple[str, str]]) -> Table:
    rows = []
    for index in range(0, len(cards), 2):
        row = []
        for title, body in cards[index : index + 2]:
            row.append([p(title, "card_title"), p(body, "card_body")])
        while len(row) < 2:
            row.append("")
        rows.append(row)
    table = Table(rows, colWidths=[83.5 * mm, 83.5 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PANEL),
                ("BOX", (0, 0), (-1, -1), 0.4, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.3, BORDER),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return table


def cover_story(items: list[WorkItem]) -> list:
    portrait = Image(PORTRAIT, width=52 * mm, height=52 * mm)
    portrait.hAlign = "CENTER"
    contact = (
        f"{link('al.shulyakovskiy@gmail.com', 'mailto:al.shulyakovskiy@gmail.com')}  |  "
        f"{link('+370 624 11430', 'tel:+37062411430')}  |  Vilnius, Lithuania<br/>"
        f"{link('alexshu.com', 'https://alexshu.com/')}  |  {link('LinkedIn', 'https://www.linkedin.com/in/al-shu/')}"
    )
    left = [
        p("CREATIVE PRODUCER - GAMING", "cover_kicker"),
        AccentRule(width=28 * mm),
        Spacer(1, 5),
        p("Alexandr Shulyakovskiy", "intro_name"),
        p(
            "Creative Producer with 9 years in gaming, leading marketing, social, "
            "livestream, community, and performance content. I combine creative taste "
            "with budget discipline, vendor leadership, and data-informed iteration.",
            "intro_body",
        ),
        p(contact, "intro_contact"),
    ]
    right = [
        portrait,
    ]
    table = Table([[left, right]], colWidths=[112 * mm, 55 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    cards = [
        ("Production Leadership", "Marketing, broadcast, social, and performance pipelines from brief to delivery."),
        ("Operational Efficiency", "Vendor restructuring, in-house livestream, budget planning, and resource allocation."),
        ("Performance Iteration", "UA creative testing across Facebook, Google, Remerge, and Moloco."),
        ("Franchise Collaboration", "Partner-ready work across The Walking Dead, UFC, Dune, Sony Pictures, and sports talent."),
    ]
    capabilities = [
        "Creative Production",
        "Performance Creative",
        "UA A/B Testing",
        "GenAI Workflows",
        "Budget Planning",
        "Vendor Management",
        "Stakeholder Management",
        "Livestream Production",
    ]
    return [
        Spacer(1, 6 * mm),
        table,
        Spacer(1, 12),
        stat_table(
            [
                ("300+", "videos delivered annually"),
                ("$340K", "annual savings from restructuring"),
                ("70%", "production cost reduction"),
                ("2x", "UA video CTR improvement"),
            ],
            col_width=41.75 * mm,
        ),
        Spacer(1, 9),
        ip_experience_strip(),
        Spacer(1, 9),
        p("What I Bring", "h2"),
        focus_table(cards),
        Spacer(1, 9),
        p("Selected Capabilities", "h2"),
        make_chip_table(capabilities, columns=4, col_width=41.75 * mm),
        Spacer(1, 9),
        p("Signature Work", "h2"),
        signature_work_table(items),
    ]


def profile_story() -> list:
    summary = (
        "Creative Producer with 9 years of experience in gaming, leading end-to-end "
        "production across marketing, social, livestream, and performance content. "
        "I combine creative vision with operational precision: owning budgets, managing "
        "vendors, coordinating cross-functional teams, and using performance data to "
        "iterate toward stronger business outcomes."
    )
    focus_cards = [
        (
            "Production Leadership",
            "Marketing, community, broadcast, social, and performance creative pipelines from brief to delivery.",
        ),
        (
            "Operational Efficiency",
            "Vendor restructuring, in-house livestream capability, budget ownership, forecasting, and resource planning.",
        ),
        (
            "Performance Iteration",
            "A/B testing frameworks across Facebook, Google, Remerge, and Moloco, with creative decisions tied to results.",
        ),
        (
            "Franchise Collaboration",
            "Partner-ready delivery across The Walking Dead, UFC, Dune, Sony Pictures, and major sports talent integrations.",
        ),
    ]
    data = []
    for title, body in focus_cards:
        data.append([p(title, "card_title"), p(body, "card_body")])
    table = Table(data, colWidths=[50 * mm, 99 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PANEL),
                ("BOX", (0, 0), (-1, -1), 0.4, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.3, BORDER),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return [
        p("Producer Profile", "h1"),
        p(summary, "body"),
        Spacer(1, 5),
        stat_table(
            [
                ("300+", "videos delivered annually"),
                ("40", "broadcasts delivered annually"),
                ("196", "staff hours saved per year"),
                ("23x", "UGC cost reduction vs. standard rates"),
            ]
        ),
        Spacer(1, 14),
        p("What I Bring", "h2"),
        table,
        Spacer(1, 14),
        p("Selected Capabilities", "h2"),
        make_chip_table(
            [
                "Creative Production",
                "Marketing Production",
                "Performance Creative",
                "UA Creative Testing",
                "A/B Testing",
                "GenAI Workflows",
                "Budget Planning",
                "Vendor Management",
                "Content Strategy",
                "Stakeholder Management",
                "Cross-functional Collaboration",
                "Livestream Production",
            ],
            columns=3,
        ),
    ]


def selected_work_story(items: list[WorkItem]) -> list:
    grouped = split_by_category(items)
    first_categories = ["IP Collaborations", "Beats Boredom Series", "Events & Campaigns"]
    story = [
        p("Selected Work", "h1"),
        p(
            "Publicly released work produced while employed by Wargaming. Links are included "
            "for portfolio review; all rights belong to their respective owners.",
            "body",
        ),
    ]
    for category in first_categories:
        if category in grouped:
            story.extend([Spacer(1, 4), p(category, "h2"), project_table(grouped[category])])
    story.append(PageBreak())
    story.extend([p("Selected Work", "h1"), p("Update Reviews", "h2")])
    if "Update Reviews" in grouped:
        story.append(project_table(grouped["Update Reviews"]))
    story.extend(
        [
            Spacer(1, 12),
            p("More Portfolio Links", "h2"),
            p(
                f"Full portfolio website: {link('alexshu.com', 'https://alexshu.com/')}<br/>"
                f"Performance marketing folder: {link('Google Drive portfolio folder', 'https://drive.google.com/drive/folders/11i7GYWnWjKAd1ppdNoC7YKX2nR-Z10T7?usp=sharing')}",
                "body",
            ),
        ]
    )
    return story


def experience_story() -> list:
    creative_bullets = [
        "Owned and scaled production pipelines for marketing, community, broadcast, and performance content, delivering 300+ videos and 40 broadcasts annually.",
        "Rebuilt vendor operations and launched an in-house livestream setup, saving $340,000 annually and 196 staff hours per year.",
        "Reduced asset production time by 20% through workflow and review pipeline optimization.",
        "Owned project budgets and resource allocation across cross-functional teams, forecasting costs and driving financial efficiency.",
        "Produced marketing and in-game assets for collaborations with The Walking Dead, UFC, Dune, and Sony Pictures.",
        "Introduced GenAI-assisted workflows, reducing production costs by 70%.",
        "Owned onboarding and professional development for new team members, accelerating growth into mid-level producer roles.",
    ]
    social_bullets = [
        "Owned and scaled an influencer network generating 20M+ weekly views with zero paid budget.",
        "Led UGC video production for the official YouTube channel at $300 per video, achieving a 23x cost reduction versus standard production rates.",
    ]
    tools = [
        "Adobe Premiere Pro",
        "After Effects",
        "Photoshop",
        "vMix",
        "Frame.io",
        "Miro",
        "Figma",
        "Jira",
        "ChatGPT",
        "higgsfield.ai",
        "suno",
        "Kling",
        "Veo3",
        "Claude Code",
        "Claude.ai",
        "Eleven Labs",
        "Artlist.io",
        "deepseek",
        "openrouter.ai",
    ]
    langs = "English (C2), Belarusian (Fluent), Russian (Native)"
    story = [
        p("Experience & Toolkit", "h1"),
        p("Creative Producer, Wargaming.net", "role"),
        p("Sep 2018 - Apr 2026", "role_meta"),
    ]
    story.extend([p(f"- {bullet}", "bullet") for bullet in creative_bullets])
    story.extend(
        [
            Spacer(1, 6),
            p("Social Media Marketing Manager, Wargaming.net", "role"),
            p("Feb 2017 - Sep 2018", "role_meta"),
        ]
    )
    story.extend([p(f"- {bullet}", "bullet") for bullet in social_bullets])
    story.extend(
        [
            Spacer(1, 10),
            SectionDivider(),
            p("Education", "h2"),
            p("Belarusian State Technological University (BSTU)<br/>B.Sc. in Industrial Automation | 2009 - 2014", "body"),
            p("Tools", "h2"),
            make_chip_table(tools, columns=3),
            Spacer(1, 9),
            p("Languages", "h2"),
            p(langs, "body"),
            Spacer(1, 10),
            p(
                f"Contact: {link('al.shulyakovskiy@gmail.com', 'mailto:al.shulyakovskiy@gmail.com')}  |  "
                f"{link('+370 624 11430', 'tel:+37062411430')}  |  "
                f"{link('LinkedIn', 'https://www.linkedin.com/in/al-shu/')}  |  "
                f"{link('alexshu.com', 'https://alexshu.com/')}",
                "body",
            ),
        ]
    )
    return story


def build_pdf() -> None:
    items = parse_work_items()
    doc = PortfolioDocTemplate(
        OUTPUT,
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=22 * mm,
        bottomMargin=18 * mm,
        title="Alexandr Shulyakovskiy Portfolio",
        author="Alexandr Shulyakovskiy",
        subject="Creative Producer portfolio",
    )
    story: list = []
    story.extend(cover_story(items))
    story.append(PageBreak())
    story.extend(selected_work_story(items))
    story.append(PageBreak())
    story.extend(experience_story())
    doc.build(story, onFirstPage=draw_page_chrome, onLaterPages=draw_page_chrome)


if __name__ == "__main__":
    build_pdf()
    print(OUTPUT)
