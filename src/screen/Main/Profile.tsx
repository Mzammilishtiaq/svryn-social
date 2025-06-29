import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Link,
  Box,
  Divider,
} from "@mui/material";
import { ProfileCover } from "../../shared/Imageurl";

const profileImg = "https://randomuser.me/api/portraits/women/44.jpg"; // Placeholder profile
const shopImg =
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80";
const photosImg =
  "https://images.unsplash.com/photo-1517260911205-8a3b86e7a67b?auto=format&fit=crop&w=400&q=80";
const videosImg =
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80";

export default function Profile() {
  return (
    <Box className=" bg-[#afc2cf36] flex flex-col items-center">
      {/* Cover Photo */}
      <Box className="relative w-full rounded-b-2xl overflow-hidden shadow-lg">
        <img
          src={ProfileCover}
          alt="cover"
          className="w-full h-48 object-cover"
        />
        {/* Profile Avatar */}
        <Avatar
          src={profileImg}
          alt="profile"
          sx={{
            width: 200,
            height: 200,
            border: "5px solid #b7c9d1",
            position: "absolute",
            left: 24,
            top: 130,
            zIndex: 50,
          }}
          className="shadow-xl"
        />
        <Box className="flex flex-col ml-60">
          <Typography
            variant="h3"
            className="font-[Pacifico] text-3xl mt-2"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Rachel Stinson
          </Typography>
          <Typography variant="subtitle1" className="text-lg mt-1">
            Traveller & Jewellery designer
            <br />
            based in Los Angeles
          </Typography>
          <Link
            href="https://www.rachelstinson.com"
            target="_blank"
            rel="noopener"
            className="text-blue-500 mt-1"
          >
            WWW.RACHELSTINSON.COM
          </Link>
        </Box>

        {/* Profile Info */}
        <Box className="w-full bg-[#afc2cf36] py-6 px-6 flex flex-col items-start">
          <Divider className="my-4 w-full" />
          {/* Follows/Following */}
          <Box className="flex w-full justify-center gap-8 mb-2">
            <Box className="flex gap-x-2 items-center">
              <Typography className="font-bold text-lg">
                1.2k
              </Typography>
              <Typography className="uppercase text-lg">Follows</Typography>
            </Box>
            <Divider orientation="vertical" flexItem className="mx-2" />
            <Box className="flex gap-x-2 items-center">
              <Typography className="font-bold text-lg">
                230
              </Typography>
              <Typography className="text-lg" >Following</Typography>
            </Box>
          </Box>
          <Divider className="my-4 w-full" />
          {/* Cards */}
          <div className="mt-2 w-full flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Card className="rounded-xl shadow-md">
                <img
                  src={shopImg}
                  alt="Shop"
                  className="w-full h-32 object-cover rounded-t-xl"
                />
                <CardContent className="text-center">
                  <Typography variant="body1" className="font-semibold">
                    Visit Rachel's SVRYN Shop
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1">
              <Card className="rounded-xl shadow-md">
                <img
                  src={photosImg}
                  alt="Photos"
                  className="w-full h-32 object-cover rounded-t-xl"
                />
                <CardContent className="text-center">
                  <Typography variant="body1" className="font-semibold">
                    View Rachel's Photos
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1">
              <Card className="rounded-xl shadow-md">
                <img
                  src={videosImg}
                  alt="Videos"
                  className="w-full h-32 object-cover rounded-t-xl"
                />
                <CardContent className="text-center">
                  <Typography variant="body1" className="font-semibold">
                    View Rachel's Videos
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
