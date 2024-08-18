import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("d368861f-e9b0-4902-b98b-5142ceffadc4");

  return (
    <Container>
      <div className="pb-10 space-y-10">
        {Array.isArray(billboard) && <Billboard 
          data={billboard}
        />}
        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          {Array.isArray(products) && <ProductList title="Featured Products" items={products} />}
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
