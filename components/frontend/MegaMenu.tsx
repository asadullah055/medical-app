"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const megaMenu = [
  {
    title: "Top Booked",
    service: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "Video prescription refill",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "In person doctor visit",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
    ],
  },
  {
    title: "Doctor",
    service: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "Video prescription refill",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "In person doctor visit",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
    ],
  },
  {
    title: "Specialists",
    service: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "Video prescription refill",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "In person doctor visit",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
    ],
  },
  {
    title: "Symptoms",
    service: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "Video prescription refill",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "In person doctor visit",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem porro tenetur voluptate? Repudiandae cum, distinctio perferendis nemo cumque necessitatibus tenetur cupiditate, consequuntur excepturi dolor maiores rerum eveniet nesciunt eius a",
      },
    ],
  },
];

export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        {megaMenu.map((item, i) => (
          <NavigationMenuItem key={i}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.service.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={`/service${component.slug}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
