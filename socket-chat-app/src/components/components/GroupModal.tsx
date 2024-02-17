import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import MemberDropdown from "./MemberDropdown";
import { SelectedUserProvider, useSelectedUsers } from "@/contexts/GroupDropContext"; // Import the context and hook
import Api from "@/Api";
import { Mutation, useMutation } from "react-query";

type Inputs = {
  chatName: string;
  groupMembers: string[];
};

const GroupModal = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { selectedUsers } = useSelectedUsers(); // Get the selected users from the context
  const createMutation = useMutation({
    mutationFn: () => {
      return Api.post("/group/",{
        selectedUsers:selectedUsers,
        ...data
      }); // Pass selectedUsers to the API call
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // const res = await createMutation.mutateAsync({...data});
    console.log(data);
    const res=await createMutation.mutateAsync()
  };

  return (
    <SelectedUserProvider>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-gray-400 hover-bg-gray-300 text-xl font-semibold flex gap-2">
            <span>New Group</span>
            <IoMdAdd />
          </Button>
        </DialogTrigger>
        <DialogContent className="h-60">
          <DialogHeader>
            <DialogTitle>Create Group</DialogTitle>
            <DialogDescription>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-between gap-5"
              >
                <Input {...register("chatName")} placeholder="Chat name" />
                <MemberDropdown />
                <Button type="submit">Create Group</Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </SelectedUserProvider>
  );
};

export default GroupModal;
