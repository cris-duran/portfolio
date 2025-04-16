import { CardMedia, Card, Container, Rating, Typography, CardContent } from "@mui/material";
import cristianLogo from "@assets/cristian.png";

function Home({ count, setCount }: { count: number, setCount: (count: number) => void }) {
    return (
        <section className="home">
            <article className="centered">
                <Container maxWidth="lg" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Container style={{ width: '50%', margin: '0' }}>
                        <Typography variant="h1">Cristian Duran</Typography>
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
                    <Container style={{ width: '50%', margin: '0' }}>
                        <Card variant="outlined" sx={{ backgroundColor: 'rgb(29, 23, 39)', maxWidth: 255 }}>
                            <CardMedia
                                component="img"
                                image={cristianLogo}
                                title="Cristian Duran Avatar"
                                sx={{ borderRadius: '100%', backgroundColor: 'white.light', padding: '1px', width: '75%', margin: 'auto' }}
                            />
                            <CardContent sx={{ backgroundColor: 'rgb(29, 23, 39)', width: '75%', margin: 'auto' }}>
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly/>
                            </CardContent>
                        </Card>
                    </Container>
                </Container>
            </article>
        </section>
    )
}

export default Home;