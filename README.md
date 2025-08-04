# SocialBoost - موقع احترافي لزيادة المتابعين

موقع احترافي باللغة العربية لجذب الناس للتسجيل في خدمات زيادة متابعين انستغرام وتيك توك.

## المميزات

- 🚀 تصميم عصري وجذاب
- 📱 متجاوب مع جميع الأجهزة
- 💰 أسعار تبدأ من $4 لكل 1000 متابع
- 📱 تكامل مع واتساب للتواصل المباشر
- 🌟 شهادات العملاء لإضفاء المصداقية
- 🎯 حاسبة أسعار تفاعلية
- 📊 تحليلات وتتبع الأداء

## التقنيات المستخدمة

- Next.js 15 مع App Router
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui components
- Prisma ORM
- Lucide React icons

## البدء

### تثبيت الاعتمادات
```bash
npm install
تشغيل خادم التطوير
npm run dev
بناء المشروع
npm run build
بدء خادم الإنتاج
npm start
النشر
المشروع جاهز للنشر على Vercel أو Netlify.

التواصل
للتواصل والاستفسارات:

واتساب: +9647814593445
البريد الإلكتروني: info@socialboost.com
الرخصة
MIT License

### 3. ملف `src/app/layout.tsx`
```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { dir } from 'rtl'

const inter = Inter({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'SocialBoost - زيادة متابعين انستغرام وتيك توك',
  description: 'خدمة احترافية لزيادة متابعين انستغرام وتيك توك بأسعار تبدأ من $4 لكل 1000 متابع',
  keywords: 'زيادة متابعين, انستغرام, تيك توك, متابعين حقيقيين, تسويق',
  authors: [{ name: 'SocialBoost' }],
  openGraph: {
    title: 'SocialBoost - زيادة متابعين انستغرام وتيك توك',
    description: 'خدمة احترافية لزيادة متابعين انستغرام وتيك توك',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SocialBoost - زيادة متابعين انستغرام وتيك توك',
    description: 'خدمة احترافية لزيادة متابعين انستغرام وتيك توك',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir={dir()}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
