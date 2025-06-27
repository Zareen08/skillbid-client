export const homeLoader = async () => {
  const tasksRes = await fetch('https://skillbid-server-site.vercel.app/featured-tasks');
  const categoriesRes = await fetch('https://skillbid-server-site.vercel.app/categories');
  
  const tasks = await tasksRes.json();
  const categories = await categoriesRes.json();

  return { tasks, categories };
};