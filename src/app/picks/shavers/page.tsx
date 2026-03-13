import type { Metadata } from 'next'
import ShaversClient from './ShaversClient'
import { SITE_URL, getProductsByCategory } from '@/lib/data'

const PRODUCTS = getProductsByCategory('shavers')

