const ProfileEdit = () => import("./ProfileEdit/ProfileEdit.vue")
const AccountSetting = () => import("./AccountSetting/AccountSetting.vue")
const MyProfile = () => import("./Profile/Profile.vue")
const Privacy = () => import("./Privacy/Privacy.vue")
const UserList = () => import("./User/UserList")

const userChildRoute = (prop) => [{
  path: "user-list",
  name: prop + ".user-list",
  meta: {
    auth: true,
    name: "User List"
  },
  component: UserList
},
{
  path: "user-edit",
  name: prop + ".user-edit",
  meta: {
    auth: true,
    name: "Edit Profile"
  },
  component: ProfileEdit
},
{
  path: "account-setting",
  name: prop + ".account-setting",
  meta: {
    auth: true,
    name: "Account Settings"
  },
  component: AccountSetting
},
{
  path: "user-profile",
  name: prop + ".user-profile",
  meta: {
    auth: true,
    name: "My Profile"
  },
  component: MyProfile
},
{
  path: "privacy",
  name: prop + ".privacy",
  meta: {
    auth: true,
    name: "Privacy"
  },
  component: Privacy
}
]

export default userChildRoute
