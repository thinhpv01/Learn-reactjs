import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import productApi from 'api/productApi';
import { useState } from 'react';
import { Pagination, Skeleton } from '@material-ui/lab';
import ProductSkeletonList from 'features/Products/components/ProductSkeletonList';
import ProductList from 'features/Products/components/ProductList';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
}));

function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 9,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 9,
    });
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                console.log(pagination);
                setProductList(data);
                setPagination(pagination);
                console.log(data);
            } catch (error) {
                console.log('failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, [filters]);
    const handlePaginationClick = (e, page) => {
        setFilters((prevFilter) => ({
            ...prevFilter,
            _page: page,
        }));
    };
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left colum</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading ? (
                                <ProductSkeletonList length={9} />
                            ) : (
                                <ProductList data={productList} />
                            )}
                            <Pagination
                                count={Math.ceil(pagination.total / pagination.limit)}
                                page={pagination.page}
                                color="primary"
                                onChange={handlePaginationClick}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
