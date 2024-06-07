//@ts-nocheck
"use client"


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
import axios from "axios" 
import { useState } from "react";
import { useToast } from "./ui/use-toast";


export default function AuthForm() {

  axios.defaults.withCredentials = true;

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVerify, setPasswordVerify] = useState("")
  const { toast } = useToast()

  function handleLogin(){
    axios.post('http://localhost:3001/auth/login', {
      "first_name": name,
      "last_name": surname,
      "password" : password,
    })
    .then(function (response) {
      console.log(response);
      toast({
        title: "Úspěšně přihlášen",
        description: "Vítej " + name + " " + " " + surname,
        variant: "success"
      })
      window.location.reload();
      
    })
    .catch(function (error) {
      console.log(error);
      toast({
        title: "KRUCIŠ, nepovedlo se",
        description: "Chyba " + error,
        variant: "destructive",
      })
    });
  }

  function handleRegister(){
      if(password == passwordVerify){
        axios.post('http://localhost:3001/auth/register', {
        "first_name": name,
        "last_name": surname,
        "password" : password,
      })
      .then(function (response) {
        console.log(response);
        toast({
          title: "Úspěšně registrován",
          description: "Vítej " + name + " " + " " + surname,
          variant: "success"
        })
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: "KRUCIŠ, nepovedlo se",
          description: "Chyba " + error,
          variant: "destructive",
        })
      });
    }else{
      toast({
        title: "Neshoda hesel",
        description: "Tvá hesla se neshodují",
        variant: "destructive"
      })
    }
  }


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
              <Input onChange={(event) => setName(event.target.value)} id="name" placeholder="Prokop" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="surname">Příjmení</Label>
              <Input onChange={(event) => setSurname(event.target.value)} id="surname" placeholder="Dveře" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Heslo</Label>
              <Input onChange={(event) => setPassword(event.target.value)} type="password" id="password" placeholder="Heslo" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin}>Přihlásit se</Button>
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
              <Input onChange={(event) => setName(event.target.value)} id="first_name" placeholder="Prokop"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="last_name">Příjmení</Label>
              <Input onChange={(event) => setSurname(event.target.value)} id="last_name" placeholder="Dveře"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Heslo</Label>
              <Input onChange={(event) => setPassword(event.target.value)} id="password" type="password" placeholder="Heslo"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password-verify">Ověření hesla</Label>
              <Input onChange={(event) => setPasswordVerify(event.target.value)} id="password-verify" type="password" placeholder="Heslo znovu"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRegister}>Registrovat se</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </>
  )
}