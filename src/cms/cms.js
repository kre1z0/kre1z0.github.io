import CMS from "netlify-cms";

import { PortfoliotPreview } from "./preview-templates/PortfolioPagePreview";

CMS.registerPreviewTemplate("portfolio", PortfoliotPreview);
