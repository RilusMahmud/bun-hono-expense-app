import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { userQueryOptions } from "@/lib/api";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/profile")({
  component: Profile,
});

function Profile() {
  const { isPending, error, data } = useQuery(userQueryOptions);

  const getInitials = (given_name: string, family_name: string) =>
    `${given_name.charAt(0).toUpperCase()}${family_name.charAt(0).toUpperCase()}`;

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="p-2">
      <div className="flex items-center gap-2">
        <Avatar>
          {data.user.picture && (
            <AvatarImage src={data.user.picture} alt={data.user.given_name} />
          )}
          <AvatarFallback>
            {getInitials(data.user.given_name, data.user.family_name)}
          </AvatarFallback>
        </Avatar>
      </div>
      <p>
        {data.user.given_name} {data.user.family_name}
      </p>
      <Button asChild className="my-4">
        <a href="/api/v1/logout">Logout</a>
      </Button>
    </div>
  );
}
