export const getGlobalData = () => {
  const name = decodeURI(process.env.BLOG_NAME);
  const blogTitle = decodeURI(process.env.BLOG_TITLE);
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
