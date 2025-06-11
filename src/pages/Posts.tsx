import { useEffect, useState } from 'react';
import '../App.css';

interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
}

interface PostData extends Post {
  image: string;
  body: string;
}

function Homepage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    fetch('/postindex.json') // Make sure this is in 'public'
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  useEffect(() => {
    if (currentPostId !== null) {
      fetch(`/${currentPostId}.json`) // Each post JSON: 1.json, 2.json, etc.
        .then(response => response.json())
        .then(data => setPostData(data))
        .catch(error => console.error('Error fetching post data:', error));
    }
  }, [currentPostId]);

  return (
    <div className='main'>

      {/* If viewing post list */}
      {currentPostId === null ? (
        <>
          <div className="posts-page-head">
            <div>
              <h1 style={{ marginTop: "0em", marginBottom: "0em" }}>Posts</h1>
            </div>
          </div>

          <div className="posts-page">
            {posts.length > 0 ? (
              posts.map(post => (
                <div
                  className='posts-page card'
                  key={post.id}
                  onClick={() => setCurrentPostId(post.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card">
                    <h2>{post.title}</h2>
                    <span className='subtext'>{post.date} - {post.author}</span>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading posts...</p>
            )}
          </div>
        </>
      ) : (
        // If viewing a single post
        postData && (
          <>
            <div className="posts-page-head">
              <div>
                <span className='subtext'>{postData.date}</span>
                <img src={postData.image} alt="Blog" style={{ width: '100%', marginTop: '1em' }} />
                <h1 style={{ marginTop: "1em", marginBottom: "0.5em" }}>{postData.title}</h1>
              </div>
            </div>

            <div className="posts-page">
              <div className='posts-page card'>
                <div className="card">
                  <p>{postData.body}</p>
                  <span className='subtext' style={{ display: 'block', marginTop: '1em' }}>
                    Written by {postData.author}
                  </span>
                  <button style={{ marginTop: '1em' }} onClick={() => setCurrentPostId(null)}>← Back to Posts</button>
                </div>
              </div>
            </div>
          </>
        )
      )}

    </div>
  );
}

export default Homepage;
