# Next.js Starter Template

A modern, production-ready Next.js starter template with enterprise-grade features including multi-language support, authentication, dashboard, and beautiful UI components.

## ✨ Features

- **🚀 Next.js 15.5(latest)** with App Router and latest React features
- **🌍 Multi-language support** (English, French, Pashto, Dari) with RTL support
- **🎨 Beautiful UI** with Tailwind CSS and shadcn/ui components
- **🔒 Authentication system ui** with sign-in and sign-up
- **📱 Responsive design** optimized for all devices
- **🌙 Dark/Light theme** with system preference detection
- **⚡ TypeScript** for enhanced developer experience and type safety
- **📊 State management** with Zustand for efficient state handling
- **✅ Form handling** with React Hook Form and Zod validation
- **🔗 URL state management** with nuqs for better UX
- **🧹 Code quality** with Biome for linting and formatting
- **📦 Package management** with pnpm for faster, more efficient installs and disk space savings

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalized routes
│   │   ├── (website)/     # Public website pages
│   │   ├── auth/          # Authentication pages
│   │   └── dashboard/     # Protected dashboard
│   └── globals.css        # Global styles
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   └── common/            # Common utility components
├── features/               # Feature-based modules
│   ├── dashboard/         # Dashboard features
│   └── website/           # Website features
├── hooks/                  # Custom React hooks
├── stores/                 # Zustand state stores
├── lib/                    # Core utilities and configurations
├── types/                  # TypeScript type definitions
└── i18n/                  # Internationalization files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (required)

### Why pnpm?

This project uses **pnpm** as the package manager for several advantages:
- **🚀 Faster installation** - Parallel package downloads
- **💾 Disk space efficient** - Shared dependencies across projects
- **🔒 Strict dependency resolution** - Prevents phantom dependencies
- **📦 Better monorepo support** - Efficient workspace management
- **⚡ Faster scripts** - Optimized execution

### Installation

0. **Install pnpm (if not already installed):**
   ```bash
   npm install -g pnpm
   ```

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd nextjs-starter-template
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Project Screenshots

### 🌐 Website Landing Page
![Website Landing Page](/public/assets/images/landing-page.JPG)

### 🔐 Authentication Pages
![Login Background](/public/assets/images/login.JPG)

### 👥 User Management Dashboard
![User Management](/public/assets/images/usermanagement.JPG)

### 🎨 Modern UI Components
The template features beautiful, responsive components built with shadcn/ui and Tailwind CSS, ensuring a consistent and professional look across all pages.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |
| `pnpm check` | Run all Biome checks |
| `pnpm fix` | **Fix all formatting and linting issues** |

## 🔧 Development Workflow

### Before Committing Code

**⚠️ IMPORTANT: Always run the following command before any git commit:**

```bash
pnpm fix
```

This command will:
- Format your code according to project standards
- Fix any linting issues automatically
- Ensure code quality and consistency

### Code Quality Tools

- **Biome**: Fast linter and formatter
- **TypeScript**: Static type checking

## 🌍 Internationalization

The template uses **next-intl** package for comprehensive internationalization support:

- **Multi-language routing** with locale-based URLs
- **Automatic RTL detection** for right-to-left languages
- **Type-safe translations** with TypeScript support
- **Dynamic language switching** with persistent preferences
- **SEO-friendly** internationalized URLs
- **Built-in fallbacks** for missing translations

### Supported Locales
The template is configured to support multiple locales out of the box, with easy extensibility for adding new languages.

## 🎨 Customization

### Styling
- Modify color schemes in `app/globals.css`
- Update component themes in `components/theme-provider.tsx`

### Features
- Add new features in the `features/` directory
- Extend authentication in `features/dashboard/auth/`
- Create new dashboard pages in `app/[locale]/dashboard/`

### Components
- Extend shadcn/ui components in `components/ui/`
- Create new shared components in `components/common/`
- Add layout components in `components/layout/`

## 📱 Responsive Design

The template is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Progressive enhancement

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
1. Build the project: `pnpm build`
2. Start the server: `pnpm start`
3. Configure your hosting platform

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | React Framework | 15.5.0 |
| [React](https://reactjs.org/) | UI Library | 19.1.1 |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | 5.x |
| [Tailwind CSS](https://tailwindcss.com/) | Styling | 4.x |
| [shadcn/ui](https://ui.shadcn.com/) | UI Components | Latest |
| [Zustand](https://zustand-demo.pmnd.rs/) | State Management | 5.0.8 |
| [React Hook Form](https://react-hook-form.com/) | Form Handling | 7.62.0 |
| [Zod](https://zod.dev/) | Schema Validation | 4.0.17 |
| [next-intl](https://next-intl-docs.vercel.app/) | Internationalization | 4.3.5 |
| [Biome](https://biomejs.dev/) | Linting & Formatting | 2.2.0 |
| [pnpm](https://pnpm.io/) | Package Manager | 8.x |


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. **Run `pnpm fix` before committing**
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Biome](https://biomejs.dev/) - Fast linter and formatter
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [React Hook Form](https://react-hook-form.com/) - Form handling

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository

---

**Happy coding! 🎉**
