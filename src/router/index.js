import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/Baselayouts";

const router = createBrowserRouter([
    {
      element: <BaseLayout/>,
      children: [
        {
            path: "/",
            // element:
        }
      ],
    },
  ]);
  
  export default router;