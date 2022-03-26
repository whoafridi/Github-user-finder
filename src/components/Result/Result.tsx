interface Props {
  repo: object;
  error: string
}
const Result: React.FC<Props> = ({ repo,error }): JSX.Element => {
  const {
    name,
    location,
    bio,
    created_at,
    html_url,
    company,
    public_repos,
    followers,
    avatar_url,
  }: any = repo;

  console.log(repo);
  return (
    <>
      {repo.hasOwnProperty("message") ? (
        <p>{error}</p>
      ) : ( 
        <div className="h-50">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={avatar_url}
                  className="img-fluid card-img-top img-fluid rounded w-auto rounded mx-auto d-block"
                  alt={name}
                />
              </div>
              <div className="col-md-8 shadow bg-body rounded">
                <div className="card-body">
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Bio : {bio}</p>
                    <p className="card-title">Followers: {followers}</p>
                    <p className="card-text">
                      Public repositories : {public_repos}
                    </p>
                    <p className="card-text">Company : {company}</p>
                    <p className="card-text">Location : {location}</p>
                    <h6 className="card-title text-muted">
                      Created github : {created_at}
                    </h6>
                    <a href={html_url} className="btn btn-danger rounded-pill">
                      Go to github account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
