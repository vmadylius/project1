# 📊 Trading Sessions Dashboard MVP

Застосунок для моніторингу та аналізу ключових торгових сесій (London, New York, Tokyo) з відстеженням ліквідності та волатильності ринку.

[![CI/CD Pipeline](https://github.com/vmadylius/project1/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/vmadylius/project1/actions/workflows/ci-cd.yml)

🔗 **Live Production URL:** [project1-taupe-nine.vercel.app](https://project1-taupe-nine.vercel.app)

---

## 🛠️ Технологічний стек & Інструменти
* **Frontend:** React, Vite, Tailwind CSS
* **Testing:** Vitest, React Testing Library
* **Code Quality:** ESLint
* **Monitoring & Analytics:** Sentry (Error Tracking), PostHog (Product Analytics)
* **CI/CD Platform:** GitHub Actions (Ubuntu runner)
* **Hosting Provider:** Vercel (Continuous Deployment)

---

## ✨ Особливості (Features)
- Динамічне перемикання між трьома ключовими сесіями (London, New York, Tokyo).
- Відстеження внутрішньосесійних показників волатильності та зон ліквідності.
- Реалізація реактивного керування станом за допомогою хука `useState`.
- Інтегрований зворотний проксі (Reverse Proxy) для безпечного збору продуктової аналітики в обхід блокувальників реклами.
- Налаштовані автоматичні «ворота якості» (Quality Gate) на етапі Pull Request.

---

## 🚀 Встановлення та запуск (Installation & Setup)

1. **Клонуйте репозиторій:**
   ```bash
   git clone [https://github.com/vmadylius/project1.git](https://github.com/vmadylius/project1.git)
   cd project1