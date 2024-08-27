// import { useEffect } from 'react';
// import axios from 'axios';
import axios from 'axios';
import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
// import ArticleList from './ArticleList/ArticleList';
// import ClipLoader from 'react-spinners/ClipLoader';

export default function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async values => {
    console.log(values);

    const response = await axios.get(
      `http://api.github.com/users/${values.username}`
    );
    setUser(response.data);
  };

  return (
    <div>
      <h1>HTTP requests in React</h1>
      <Formik initialValues={{ username: '' }} onSubmit={handleSearch}>
        <Form>
          <Field type="text" name="username" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.name} width="180" />
          <p>
            <a href={user.html_url}>{user.name}</a>
          </p>
          <p>Followers: {user.followers}</p>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
}

// export default function App() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const override = {
//     display: 'block',
//     margin: '0 auto',
//     borderColor: 'red',
//   };

//   useEffect(() => {
//     async function fetchArticles() {
//       setLoading(true);

//       try {
//         const response = await axios.get(
//           'https://hn.algolia.com/api/v1/search?query=react'
//         );
//         setArticles(response.data.hits);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>

//       {loading ? (
//         <ClipLoader
//           color="red"
//           loading={loading}
//           cssOverride={override}
//           size={150}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//       ) : (
//         <ArticleList items={articles} />
//       )}
//     </div>
//   );
// }
