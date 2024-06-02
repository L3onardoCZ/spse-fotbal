import RegisterForm from "./RegisterForm";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface AuthFormProps {
  login: boolean;
}

export default function AuthForm() {
  return (
    <>
    <div className="md:max-w-[500px]">
      <Tabs defaultValue="login">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Přihlásit
        </TabsTrigger>
        <TabsTrigger value="register">Registrovat</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Příhlášení</CardTitle>
            <CardDescription>
              Pro vstup do admin sekce se musíte přihlásit. Nemáte účet? Vytvořte si ho pomocí registrace.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Jméno</Label>
              <Input id="name" placeholder="Prokop" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="surname">Příjmení</Label>
              <Input id="surname" placeholder="Dveře" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Heslo</Label>
              <Input type="password" id="password" placeholder="Heslo" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Přihlásit se</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Registrace</CardTitle>
            <CardDescription>
              Pro vytvoření účtu se prosím registrujte. Zvolte silné heslo pro zabezpečení účtu.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="first_name">Jméno</Label>
              <Input id="first_name" placeholder="Prokop"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="last_name">Příjmení</Label>
              <Input id="last_name" placeholder="Dveře"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Heslo</Label>
              <Input id="password" type="password" placeholder="Heslo"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password-verify">Ověření hesla</Label>
              <Input id="password-verify" type="password" placeholder="Heslo znovu"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Registrovat se</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </>
  )
}