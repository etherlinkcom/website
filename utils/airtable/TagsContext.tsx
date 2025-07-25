'use client'
import { createContext, useContext } from 'react'

export const TagsContext = createContext<Record<string, string>>({})
export const useTagsMap = () => useContext(TagsContext)
