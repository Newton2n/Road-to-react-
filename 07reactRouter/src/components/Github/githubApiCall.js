
export default async function GithubResponse() {
  const response = await fetch("https://api.github.com/users/Newton2n");

  if (!response.ok) {
    throw new Response("error occurred", { status: response.status });
  }
  return response.json();
}
