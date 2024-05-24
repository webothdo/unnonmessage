export default async function () {
  const profile = useState("profile", () => null);
  const auth = useAuth();

  try {
    profile.value = await $fetch("/api/profile/getuserprofile", {
      method: "GET",
      query: {
        id: auth.user.id,
      },
    });
  } catch (error) {
    profile.value = null;
  }

  return profile;
}
