import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ritual Casero Para Quemar Grasa - Descubre el Secreto",
  description:
    "Descubre el ritual casero que borra la memoria de grasa de tu cuerpo y derrite kilos sin dietas ni ejercicio. Mezcla natural de 4 ingredientes.",
  keywords: "quemar grasa, ritual casero, perder peso, ingredientes naturales, GLP-1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
