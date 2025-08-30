import cristianLogo from "@assets/cristian.png";
import { Card, CardContent, CardMedia, Rating } from "@mui/material";

function Logo({
	size = 80,
	isRating = false,
}: {
	size?: number;
	isRating?: boolean;
}) {
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
						defaultValue={5}
						precision={0.5}
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
