import { Container, Rating } from "@mui/material";
import cristianLogo from "@assets/cristian.png";

function Home({ count, setCount }: { count: number, setCount: (count: number) => void }) {
    return (
        <section className="home">
            <article>
                <Container maxWidth="lg">
                    <div>
                        <a href="#">
                        <img src={cristianLogo} className="logo" alt="Cristian Duran Avatar" />
                        </a>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    </div>
                    <h1>Cristian Duran</h1>
                    <div className="card">
                        <button onClick={() => setCount(count + 1)}>
                        count is {count}
                        </button>
                        <p>
                        Development by Cristian Duran
                        </p>
                    </div>
                    <p className="read-the-docs">
                        Click on the Cristian Duran logo to learn more
                    </p>
                </Container>
            </article>
        </section>
    )
}

export default Home;