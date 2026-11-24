import { localServiceRoute } from "@/components/locations/LocalServicePage";

// Pages and content live in src/data/local-services.ts
const route = localServiceRoute("kanpur");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
