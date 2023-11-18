import prismadb from '@/lib/prismadb';
import { CategoryForm } from './components/category-form';

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billbards = await prismadb.billboard.findMany({
    where: {
      storeId: category?.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billbards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
