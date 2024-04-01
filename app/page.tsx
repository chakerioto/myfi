"use client"
import { Table } from 'antd';
import React from 'react'
import { MILE_STONE } from './constants';
import moment from 'moment'


function format2(n: any) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(/\.00$/, "");
}


const Home = () => {


    const currentMoney = 50000000
    const realMoneySave = 0
    const targetMoneySaving = 40000000
    const currentTarget = MILE_STONE[0]

    const startDay = moment('2024/03/10', 'YYYY/MM/DD')

    const dataSource = new Array(100).fill(0).map((item: any, index: number) => {
        return {
            title: `Day ${index + 1}`,
            dataIndex: `day${index + 1}`,
            key: `day${index + 1}`,
            payday: startDay.add(1, 'months').format('MM/YYYY'),
            month: index + 1,
            monthlyAddedMoney: index = 0 ? format2(currentMoney) : format2(targetMoneySaving * index + currentMoney),
        }

    })


    const columns = [
        {
            title: 'Month',
            dataIndex: 'month',
            key: 'month',
        },
        {
            title: 'Payday ',
            dataIndex: 'payday',
            key: 'payday',
        },
        {
            title: 'Monthly Added Money',
            dataIndex: 'monthlyAddedMoney',
            key: 'monthlyAddedMoney',
        },
        {
            title: 'Month income',
            dataIndex: 'monthincome',
            key: 'monthincome',
        },
        {
            title: 'How much do I have now',
            dataIndex: 'allihave',
            key: 'allihave',
        },
    ];
    const currentMonth = moment().get('month')

    return (
        <div className='p-6'>
            <h1 className='text-center text-[32px]'>My Road To Get To {currentTarget.title}</h1>
            <h1 className='text-center text-[24px]'>Start Date: 10/4/2024 </h1>
            <p className='text-center'>Để tiết kiệm mua nhà thì mỗi tháng cần dư ra 1 khoảng 40tr trong vòng 6.3 năm === 80 tháng</p>
            <Table
                rowClassName={(record) => moment(record?.payday, 'MM/YYYY').get('month') === currentMonth && moment(record?.payday, 'MM/YYYY').get('year') === moment().get('year') ? 'bg-red-500' : 'data-row'}
                className='mt-6' dataSource={dataSource} columns={columns} pagination={false} />

        </div>
    )
}

export default Home