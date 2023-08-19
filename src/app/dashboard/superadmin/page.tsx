import { AdminProfile, AllBlogListTable, AuthorListTable } from "@/sections/superadmin"

const superadmin = () => {
  return (
    <main>
      <AdminProfile/>
      <AuthorListTable/>
      <AllBlogListTable/>
    </main>
  )
}

export default superadmin