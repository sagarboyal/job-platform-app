# Job Platform App

A React Native mobile app for browsing official government job listings — no login required.

> 🚧 Active development — features and APIs may change.

---

## Tech Stack

| | |
|---|---|
| React Native + Expo | Mobile framework |
| TypeScript | Language |
| React Navigation | Navigation & routing |

---

## Getting Started

**Prerequisites:** Node.js 18+, Expo CLI

```bash
git clone https://github.com/sagarboyal/job-platform-app.git
cd job-platform-app
npm install
npx expo start
```

Run on:
- [Expo Go](https://expo.dev/go)
- [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)

---

## Project Structure

```
src/
├── components/    → Reusable UI (provider cards, modals)
├── navigation/    → Root & tab navigator
├── screens/       → Welcome, Home, Bookmarks
├── theme/         → Colors, fonts, images
└── utils/         → Linking, toast helpers
```

---

## Status

| Feature | Status |
|---|---|
| Browse government job listings | ✅ Done |
| No login required | ✅ Done |
| Provider cards & modals | ✅ Done |
| Bookmarks screen | ✅ Done |
| Job detail page | 🔄 Planned |
| Filter by portal / category | 🔄 Planned |
| Search | 🔄 Planned |
| Push notifications | 🔄 Planned |
