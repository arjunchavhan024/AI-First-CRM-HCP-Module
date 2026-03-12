# AI-First CRM: HCP Interaction Module

A modern, enterprise-level Life Sciences CRM frontend designed for pharmaceutical sales representatives to log and manage interactions with Healthcare Professionals (HCPs).

## 🚀 Overview

This module provides a dual-interface approach to interaction logging, combining traditional structured data entry with a cutting-edge AI-assisted conversational flow. It's built to look and feel like premium enterprise software (e.g., Salesforce/HubSpot) with a focus on speed and productivity for field reps.

## ✨ Key Features

### 1. Dual-Path Interaction Logging
- **Structured Form**: A traditional form with validation and specific fields for HCP details, items discussed, and sentiments.
- **AI Assistant Chat**: A ChatGPT-like conversational interface where users can type natural sentences (e.g., *"Met Dr. Smith, shared a brochure, he was very positive"*) and have the AI parse and draft the interaction for them.

### 2. AI Intelligence
- **Autofill Capabilities**: The AI Assistant can automatically populate the structured form from chat history.
- **Note Summarization**: One-click AI summarization of long interaction notes.
- **Key Point Extraction**: Automatically extracts action items and main topics from text notes.

### 3. Comprehensive History
- **Interaction Table**: A clean, sortable history of all past engagements with quick actions for editing or deletion.
- **Sentiment Tracking**: Visual indicators for HCP sentiment (Positive/Neutral/Negative) to help reps plan future visits.

### 4. Enterprise Design System
- **Responsive Layout**: Seamlessly transitions from a two-column desktop view to a tabbed mobile experience.
- **Clean Aesthetics**: Uses the Inter font, a curated blue color palette, and soft subtle interactions for a premium feel.

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📂 Folder Structure

- `src/components`: Reusable UI elements (Navbar, Sidebar, Form, Chat, Table).
- `src/redux`: State slices for interactions and chat history.
- `src/pages`: Main application dashboard.
- `src/index.css`: Tailwind v4 theme configuration and global styles.
