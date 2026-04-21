import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#f7f3ea]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">About</h3>
          <p className="mt-4 text-base text-slate-500">
            {siteConfig.name} is a lightweight multilingual tool for random prompts, object lists, and category-driven idea generation.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Quick Links</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/" className="text-base text-slate-500 hover:text-slate-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/random-object-generator" className="text-base text-slate-500 hover:text-slate-900">
                Random object generator
              </Link>
            </li>
            <li>
              <Link href="/random-animals-generator" className="text-base text-slate-500 hover:text-slate-900">
                Animal generator
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Connect</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="https://github.com/baiqwe/GitBase" target="_blank" rel="noreferrer" className="text-base text-slate-500 hover:text-slate-900">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://vercel.com/" target="_blank" rel="noreferrer" className="text-base text-slate-500 hover:text-slate-900">
                Vercel-ready
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-black/5 px-4 py-8 text-center text-base text-slate-400 sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
