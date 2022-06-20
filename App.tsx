import React from 'react';
import Main from "./components/Main";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnMount: 'always',
      // retry: false,
      // staleTime: 1000,
    }
  }
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;




// import React from 'react';
// import Form from "./components/User/CreatePost";
//
// const App = () => {
//   return (
//     <Form />
//   );
// };
//
// export default App;
