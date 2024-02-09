import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
const ProfileDialog = () => {
    return (
            <Dialog>
                <DialogTrigger>
                    Profile
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-center my-2">
                            {"Username"}
                        </DialogTitle>
                        <DialogDescription>
                            <img src="/background.png" alt="profile-pic" />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
    )
}

export default ProfileDialog