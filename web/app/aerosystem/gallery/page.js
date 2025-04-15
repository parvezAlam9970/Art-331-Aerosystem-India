import React from "react";
import Container from "@/components/custom/Container";
import BreadCrumb from "@/components/ReUseComp/BreadCrumb";
import Heading from "@/components/ReUseComp/Heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MediaGalleryPage = () => {
  return (
    <div>
      <BreadCrumb title="Media Gallery" subtitle="Aerosystems" />
      <Container className="my-5 md:my-10 lg:my-16">
        <div className="flex items-center text-center justify-center">
          <Heading isPlane={false}>
            <b>Moments In Motion</b>
          </Heading>
        </div>

        {/* Tabs section */}
        <div className="flex justify-center mt-10">
          <TabsDemo />
        </div>
      </Container>
    </div>
  );
};

export default MediaGalleryPage;

// TabsDemo component inside the same file
function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 border-[1px] border-lgrey rounded-none    ">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">aaa</CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">asdas</CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
