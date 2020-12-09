import React from 'react';
import { NotFound } from 'src/components/Error/404';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const _NotFoundPage = () => {
  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  );
};
const NotFoundPage = React.memo(_NotFoundPage);
export { NotFoundPage };
export default NotFoundPage;
