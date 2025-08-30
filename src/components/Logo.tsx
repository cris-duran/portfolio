import cristianLogo from "@assets/cristian.png";
import { Card, CardContent, CardMedia, Rating } from "@mui/material";
import { useState, useEffect } from "react";

function Logo({
	size = 80,
	isRating = false,
}: {
	size?: number;
	isRating?: boolean;
}) {
	const [rating, setRating] = useState(1);

	useEffect(() => {
		if (!isRating) return;

		const timer = setTimeout(() => {
			const interval = setInterval(() => {
				setRating((prevRating) => {
					if (prevRating >= 5) {
						clearInterval(interval);
						return 5;
					}
					return prevRating + 1;
				});
			}, 150); // Cada estrella aparece cada 200ms

			return () => clearInterval(interval);
		}, 250); // Comienza después de 500ms

		return () => clearTimeout(timer);
	}, [isRating]);

	return (
		<Card
			variant="outlined"
			sx={{
				backgroundColor: "rgb(29, 23, 39)",
				maxWidth: size,
				position: "relative",
				borderRadius: "100%",
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
				overflow: "hidden",
				transition: "transform 0.3s ease-in-out",
				"&:hover": {
					transform: "scale(1.05)",
				},
			}}
		>
			<CardMedia
				component="img"
				image={cristianLogo}
				title="Cristian Durán Avatar"
				sx={{
					borderRadius: "100%",
					backgroundColor: "white",
					padding: "1px",
					width: "100%",
					margin: "auto",
				}}
			/>
			{isRating && (
				<CardContent
					sx={{
						backgroundColor: "rgba(29, 23, 39, 0.8)",
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						textAlign: "center",
						padding: "8px",
					}}
				>
					<Rating
						name="half-rating-read"
						value={rating}
						precision={1}
						readOnly
						sx={{
							"& .MuiRating-iconFilled": {
								color: "#FFD700",
							},
							"& .MuiRating-iconEmpty": {
								color: "#666",
							},
						}}
					/>
				</CardContent>
			)}
		</Card>
	);
}

export default Logo;
