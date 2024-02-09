import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/input";

const SearchSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="bg-gray-400 text-md p-3 font-semibold flex justify-center gap-2 rounded-md text-white hover:bg-gray-300">
                    <FaSearch />
                    <span>Search</span>
                </div>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>Search User</SheetTitle>
                    <SheetDescription>
                       <Input placeholder="eg.kalaiselvan"/>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default SearchSheet