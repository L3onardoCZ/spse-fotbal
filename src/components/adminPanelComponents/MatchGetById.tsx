import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function MatchGetById(){
    return(
            <Card>
            <CardHeader>
                <CardTitle>Získat informace o utkání</CardTitle>
                <CardDescription>Zadej ID utkání a získej informace o něm</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="match_id">ID utkání</Label>
                    <Input id="match_id" placeholder="XXXXXX" />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Získat</Button>
            </CardFooter>
            </Card>
    )
}