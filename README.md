# ✨ Todo App - Next.js

Ứng dụng quản lý công việc thân thiện và hiện đại được xây dựng với **Next.js 16**, **TypeScript**, và **Tailwind CSS v4**.

## 🎨 Tính năng

- ✅ **Thêm/Xóa công việc** - Quản lý công việc dễ dàng
- 🔍 **Bộ lọc thông minh** - Xem tất cả / Đang làm / Hoàn thành
- 📊 **Thống kê real-time** - Theo dõi tiến độ công việc
- 💾 **Lưu trữ tự động** - Dữ liệu được lưu trong localStorage
- ⌨️ **Phím tắt** - `Ctrl/Cmd + K` để focus vào ô nhập
- 🎨 **Giao diện đẹp mắt** - Glass morphism, gradient, animations mượt
- 🌓 **Dark mode** - Tự động theo system theme
- ♿ **Accessibility** - ARIA labels, keyboard navigation, screen reader friendly
- 📱 **Responsive** - Tối ưu cho mọi thiết bị

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Các bước chạy

1. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

2. **Chạy development server**:
   ```bash
   npm run dev
   ```

3. **Mở trình duyệt**:
   - Truy cập [http://localhost:3000](http://localhost:3000)

4. **Build production** (tùy chọn):
   ```bash
   npm run build
   npm start
   ```

## 📁 Cấu trúc Project

```
todo-app-nextjs/
├── app/
│   ├── components/          # React components
│   │   ├── StatsCard.tsx
│   │   ├── TodoInput.tsx
│   │   ├── FilterTabs.tsx
│   │   ├── TodoItem.tsx
│   │   ├── EmptyState.tsx
│   │   └── KeyboardShortcuts.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useTodos.ts
│   ├── globals.css         # Global styles với Tailwind
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── types.ts            # TypeScript interfaces
├── public/                 # Static assets
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Poppins (headings) + Open Sans (body)
- **State Management**: React Hooks + localStorage
- **Icons**: Heroicons (SVG inline)

## ⌨️ Keyboard Shortcuts

- `Ctrl + K` / `Cmd + K`: Focus vào ô nhập công việc

## 🎨 Design System

### Màu sắc (Productivity Theme)
- **Primary**: Cyan 600 (#0891B2) - Tập trung, năng suất
- **Secondary**: Green 500 (#10B981) - Thành công, hoàn thành
- **Background**: Gradient từ Sky 100 → Cyan 50
- **Text**: Slate 900 (light) / Slate 100 (dark)

### Typography
- **Headings**: Poppins (Friendly, Modern, Geometric)
- **Body**: Open Sans (Readable, Clean, Professional)

### Effects
- **Glass morphism**: Transparency + backdrop blur
- **Smooth animations**: Fade in, slide in với timing functions
- **Hover states**: Scale, translate, color transitions

## 📝 Cách sử dụng

1. **Thêm công việc**: Nhập text và click "Thêm" hoặc nhấn Enter
2. **Hoàn thành**: Click vào checkbox hoặc toàn bộ todo item
3. **Xóa**: Click vào icon thùng rác
4. **Lọc**: Click vào tab "Tất cả" / "Đang làm" / "Hoàn thành"
5. **Keyboard**: Dùng `Ctrl+K` để quickly focus vào input

## ♿ Accessibility Features

- Screen reader announcements cho mọi hành động
- ARIA labels và attributes đầy đủ
- Keyboard navigation support
- Focus states rõ ràng
- Respect `prefers-reduced-motion`
- Contrast ratios đạt chuẩn WCAG

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌟 Highlights

- ✨ **Modern Stack**: Next.js 16 với Tailwind CSS v4 (RC)
- 🎯 **Best Practices**: TypeScript, Component composition, Custom hooks
- 🚀 **Performance**: Fast refresh, Turbopack, Optimized builds
- 💯 **Quality**: ESLint, Type safety, Clean code structure

## 📸 Screenshots

Xem live demo tại http://localhost:3000 sau khi chạy `npm run dev`

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

## 📄 License

MIT License - Free to use cho mọi mục đích.

---

Made with ❤️ using Next.js and Tailwind CSS
