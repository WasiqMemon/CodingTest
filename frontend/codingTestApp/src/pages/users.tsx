import { Box, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/userservice";

const Users = () => {
	const dummyData = [
		{
			id: 1,
			name: "Leanne Graham",
			email: "Sincere@april.biz",
			address: {
				street: "Kulas Light",
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
				name: "Romaguera-Crona",
			},
		},
	];

	const [searchText, setSearchText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState<any[]>([]);
	const [filteredList, setFilteredList] = useState<any[]>([]);

	const onSearch = () => {
		const searchQuery = searchText.toLowerCase();
		if (searchQuery !== "") {
			const newList = dummyData.filter(
				(item) => item.name.toLowerCase() === searchQuery
			);
			setFilteredList(newList);
		} else setFilteredList(dummyData);
	};

	const fetchData = async () => {
		setIsLoading(true);
		fetchUsers()
			.then((res) => setData(res))
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		//to check for matching users
		onSearch();
	}, [searchText]);

	useEffect(() => {
		//to  fetch users data from backend
		fetchData();
	}, []);

	return (
		<Grid
			container
			sx={{
				flex: 1,
				width: "100%",
				height: "100%",
				backgroundColor: "#FFFFFF",
			}}
		>
			<Grid size={12}>
				<TextField
					label={"Search"}
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</Grid>
			{filteredList.map((item) => (
				<Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
					<Grid size={12} justifyContent={"center"} alignItems={"center"}>
						<Typography>{`Name: ${item.name}`}</Typography>
					</Grid>
					<Grid
						size={12}
						justifyContent={"center"}
						alignItems={"center"}
						sx={{ mx: 2 }}
					>
						<Typography>{`Email: ${item.name}`}</Typography>
					</Grid>
					<Grid size={12} justifyContent={"center"} alignItems={"center"}>
						<Typography>{`Company Name: ${item.name}`}</Typography>
					</Grid>
				</Box>
			))}
		</Grid>
	);
};

export default Users;
