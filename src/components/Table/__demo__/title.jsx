import React from 'react';
import Table from 'components/Table';
import Button from 'components/Button';

// demo start
class Demo extends React.Component {
    render() {
        const dataSource = new Array(100).fill(null).map((v, i) => ({
            key: i,
            index: `index-${i}`
        }));
        const columns = new Array(5).fill(null).map((v, i) => ({
            title: `title-${i}`,
            key: `title-${i}`,
            width: 200,
            render: record => <span>content {record.index}</span>
        }));
        return (
            <div>
                <div className="demo-wrap">
                    <Table
                        title={() => (
                            <div>
                                <Button styleType="primary">Add</Button>
                                <Button>Rmove</Button>
                            </div>
                        )}
                        dataSource={dataSource}
                        columns={columns}
                    />
                </div>
            </div>
        );
    }
}
// demo end

export default Demo;
