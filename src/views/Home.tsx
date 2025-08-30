import { CardMedia, Card, Container, Rating, Typography, CardContent, ButtonGroup, Button } from "@mui/material";
import cristianLogo from "@assets/cristian.png";

function Home({ count, setCount }: { count: number, setCount: (count: number) => void }) {
    return (
        <section className="home">
            <article className="centered">
                <Container maxWidth="lg" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Container style={{ width: '50%', margin: '0' }}>
                        <Typography variant="h1" fontSize={24} color="white">Cristian Duran</Typography>
                        <Typography variant="h2" fontSize={72} color="white">Software Developer</Typography>
                        <Typography variant="body1" fontSize={24} color="white">
                            Soy estudiante de último año de Ingeniería Civil en Computación de la Universidad de Chile, con un apasionado interés en el mundo del desarrollo de aplicaciones web y la ingeniería de software.
                            Mi trayectoria como Software Developer me ha permitido adentrarme en el emocionante universo del desarrollo web y de aplicaciones Android, explorando a fondo tecnologías como JavaScript con su entorno de ejecución Node.js y sus frameworks Angular, Ionic y Vue, así como Python con su framework Django.
                        </Typography>
                        <ButtonGroup>
                            <Button variant="outlined" color="secondary">
                                <Typography variant="h6" fontSize={24} color="white">
                                    Linkedin
                                </Typography>
                            </Button>
                            <Button variant="outlined" color="secondary">
                                <Typography variant="h6" fontSize={24} color="white">
                                    Github
                                </Typography>
                            </Button>
                        </ButtonGroup>
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
                    <Container style={{ width: '50%', margin: '0'}}>
                        <Card variant="outlined" sx={{ backgroundColor: 'rgb(29, 23, 39)', maxWidth: 255, position: 'relative' }}>
                            <CardMedia
                                component="img"
                                image={cristianLogo}
                                title="Cristian Duran Avatar"
                                sx={{ borderRadius: '100%', backgroundColor: 'white.light', padding: '1px', width: '75%', margin: 'auto' }}
                            />
                            <CardContent sx={{ backgroundColor: 'rgb(29, 23, 39)', width: '75%', margin: 'auto' }}>
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly/>
                            </CardContent>
                            <div className="figure-lines">
                                <div className="figure-line line-1"></div>
                                <div className="figure-line line-2"></div>
                                <div className="figure-line line-3"></div>
                                <div className="figure-line line-4"></div>
                            </div>
                        </Card>
                    </Container>
                </Container>
            </article>
        </section>
    )
}

export default Home;