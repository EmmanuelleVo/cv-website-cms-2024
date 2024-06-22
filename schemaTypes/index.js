import { articleType } from "./articleType"
import { articleCategoryType } from "./articleCategoryType"
import { projectType } from "./projectType"
import { siteSettings } from "./siteSettings"
import { page } from "./page"
import { homePage } from "./pages/home"
import { aboutPage } from "./pages/about"

export const schemaTypes = [
    // POST TYPES
    articleType,
    articleCategoryType,
    projectType,

    siteSettings,

    // PAGES
    page,
    //homePage,
    //aboutPage,
]
