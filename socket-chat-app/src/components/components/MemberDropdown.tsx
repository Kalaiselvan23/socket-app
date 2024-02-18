import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Api from "@/Api";
import { useQuery } from "react-query";
import { useSelectedUsers } from "@/contexts/GroupDropContext"; // Import the context and hook

const fetchData = async () => {
  const res = await Api.get("/users");
  return res.data.users;
};

export default function MemberDropDown() {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState([]);
  const { data: users, isLoading, error } = useQuery("users", fetchData);
  const { setSelectedUsers } = useSelectedUsers(); // Get the setSelectedUsers function from the context

  const toggleValue = (value) => {
    setSelectedValues((prevSelectedValues) => {
      if (prevSelectedValues.includes(value)) {
        return prevSelectedValues.filter((val) => val !== value);
      } else {
        return [...prevSelectedValues, value];
      }
    });
  };            

  // Update the selected users in the context whenever the selection changes
  React.useEffect(() => {
    setSelectedUsers(selectedValues);
  }, [selectedValues, setSelectedUsers]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedValues.length > 0
            ? selectedValues
                .map((value) =>
                  users.find((user) => user._id === value)?.username
                )
                .join(", ")
            : "Select users..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search user..." className="h-9" />
          <CommandEmpty>No users found.</CommandEmpty>
          <CommandGroup>
            {users?.map((user) => (
              <CommandItem
                key={user._id}
                value={user._id}
                onSelect={() => toggleValue(user._id)}
              >
                {user.username}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedValues.includes(user._id) ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}