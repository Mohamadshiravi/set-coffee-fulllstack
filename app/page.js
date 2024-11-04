import Footer from "@/components/module/footer";
import Header from "@/components/module/header-nav/header";
import OneKGProduct from "@/components/template/starred-product";
import AdSectionOne from "@/components/template/ad";
import ArticlesSection from "@/components/template/articles";
import HomeSlider from "@/components/template/homeslider";
import StarredProduct from "@/components/template/lastestproduct";

export default async function HomePage() {
  return (
    <>
      <HomeSlider />
      <StarredProduct />
      <OneKGProduct />
      <AdSectionOne />
      <ArticlesSection />
      <Footer />
    </>
  );
}
