#!/usr/bin/env python3
"""Generate a clean, web-safe PDF CV for Ilya Daniliuk (no phone number)."""
from fpdf import FPDF

OUT = "/app/frontend/public/Ilya-Daniliuk-CV.pdf"

COBALT = (37, 99, 235)
INK = (15, 23, 42)
MUTED = (100, 116, 139)


class CV(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("helvetica", "I", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 8, f"Page {self.page_no()} - Ilya Daniliuk - CV", align="C")


def clean(t):
    return (
        t.replace("\u2013", "-").replace("\u2014", "-").replace("\u2019", "'")
        .replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')
    )


pdf = CV(format="A4", unit="mm")
pdf.set_auto_page_break(auto=True, margin=18)
pdf.set_margins(18, 16, 18)
pdf.add_page()
W = pdf.w - 36


def heading(text):
    pdf.ln(4)
    pdf.set_font("helvetica", "B", 11)
    pdf.set_text_color(*COBALT)
    pdf.cell(0, 7, clean(text.upper()), new_x="LMARGIN", new_y="NEXT")
    pdf.set_draw_color(*COBALT)
    pdf.set_line_width(0.4)
    pdf.line(18, pdf.get_y(), 18 + W, pdf.get_y())
    pdf.ln(2.5)


def para(text, size=9.5, style="", color=INK, lh=4.6):
    pdf.set_font("helvetica", style, size)
    pdf.set_text_color(*color)
    pdf.multi_cell(W, lh, clean(text))


def bullet(text):
    pdf.set_font("helvetica", "", 9.5)
    pdf.set_text_color(*INK)
    x = pdf.get_x()
    pdf.cell(5, 4.6, chr(149))
    pdf.multi_cell(W - 5, 4.6, clean(text))
    pdf.set_x(x)


def role(title, org, dates):
    pdf.set_font("helvetica", "B", 10.5)
    pdf.set_text_color(*INK)
    pdf.cell(W - 45, 6, clean(title))
    pdf.set_font("helvetica", "I", 9)
    pdf.set_text_color(*MUTED)
    pdf.cell(45, 6, clean(dates), align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("helvetica", "I", 9.5)
    pdf.set_text_color(*COBALT)
    pdf.cell(0, 5, clean(org), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)


# Header
pdf.set_font("helvetica", "B", 22)
pdf.set_text_color(*INK)
pdf.cell(0, 10, "Ilya (Eli) Daniliuk", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("helvetica", "B", 11)
pdf.set_text_color(*COBALT)
pdf.cell(0, 6, "Software Development & Data Analysis Graduate (AUT)", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("helvetica", "", 9)
pdf.set_text_color(*MUTED)
pdf.cell(0, 5, "Glen Innes, Auckland, New Zealand  |  Ilyadaniliuknz@gmail.com", new_x="LMARGIN", new_y="NEXT")
pdf.cell(0, 5, "linkedin.com/in/ilyadaniliuk  |  github.com/Mister0101", new_x="LMARGIN", new_y="NEXT")

heading("Professional Summary")
para(
    "Motivated Software Development & Data Analysis Graduate (AUT) with hands-on experience leading "
    "full-stack Agile teams and building cloud-integrated web applications. Through my university work, "
    "I've led agile project teams building real-world cloud solutions with React and AWS, while working "
    "as a supervisor at KFC to pay my way through my degree. Running busy shifts taught me clear "
    "communication, calm problem-solving under pressure, and how to lead a team - skills I bring directly "
    "into software engineering and business-facing technology roles."
)

heading("Core Technical Skills")
para("Languages: JavaScript, TypeScript, Python, Java, C++, SQL, HTML/CSS, R")
para("Frontend & Cloud: React, Next.js, AWS (Cognito, Amplify, DynamoDB), UI/UX Design")
para("Backend & Databases: SQL / Relational databases, PHP, REST APIs, System Architecture")
para("Tools & Methodologies: Git, Vercel, Supabase, Render, Kanban/Agile, Software Validation, Data Visualization")

heading("Featured Engineering Projects")
role("Team Lead & Frontend Developer - Industry IoT Automation Platform", "AUT Project", "")
para(
    "Led a full-stack engineering team in a Kanban environment to design and automate IoT workflows for a "
    "business application. Architected user-facing interfaces using React and integrated cloud "
    "infrastructure utilizing AWS Cognito, Amplify, and DynamoDB. Directed feature development, sprint "
    "planning, and collaborative problem-solving, delivering a fully functional cloud-automated prototype."
)
pdf.ln(1.5)
role("Developer - Stock Management System", "Live Application", "")
para(
    "Built and deployed a dynamic web system handling real-time inventory tracking, user inputs, form "
    "validation, and database operations. Tech Stack: React, SQL/Database back-end (Supabase), Vercel deployment."
)
pdf.ln(1.5)
role("Data Analysis & Visualization Projects", "AUT", "")
para(
    "Executed statistical analysis and hypothesis testing using R and Python to validate dataset outcomes "
    "and render insight visualizations. Implemented non-parametric analysis and Maximum Likelihood "
    "Estimation (MLE) models for computational problem-solving."
)

heading("Certifications & Training")
bullet("GitHub Foundations - GitHub (via Microsoft). Issued Aug 2026, expires Aug 2028. Credential ID: 43A71C9820BC3247. Certification number: A598B9-D01CEW.")
bullet("Ultimate AWS Certified Cloud Practitioner CLF-C02 (exam preparation course) - Udemy, 2026.")
bullet("GH-900: GitHub Foundations Exam Preparation (5 hrs) - Udemy, Aug 2026.")
bullet("Python for Data Science and Machine Learning Bootcamp (25 hrs) - Udemy, Aug 2026.")
bullet("Introduction to Python Programming - Udemy, 2026.")

heading("Work Experience")
role("Shift Supervisor", "KFC Restaurant, Auckland", "Oct 2022 - Present")
bullet("Team Leadership: Manage, train, and motivate shift teams of up to 10+ staff members to maintain high productivity and service quality in a fast-paced environment.")
bullet("Operations & Systems: Execute daily financial entries into store management systems, audit inventory controls, and ensure strict compliance with health, safety, and operational standards.")
bullet("Problem Solving: Handle customer escalations and operational bottlenecks calmly, ensuring high customer retention and satisfaction.")

heading("Education")
role("Bachelor of Computer and Information Sciences", "Auckland University of Technology (AUT), Auckland", "Graduated 30 June 2026")
para("Major: Software Development & Data Analysis")

heading("Volunteer Work & Interests")
bullet("Youth Camp Instructor (2021): Supervised groups of children, coordinated daily events and activities, and managed health/safety emergency protocols.")
bullet("Interests: Gym, reading, strategic board games, personal development.")

pdf.output(OUT)
print("PDF written to", OUT)
