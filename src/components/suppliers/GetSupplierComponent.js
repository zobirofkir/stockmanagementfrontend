import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetSuppliersAction from '@/redux/actions/suppliers/GetSuppliersAction';

const GetSupplierComponent = () => {
  const dispatch = useDispatch();
  const { isLoading, getSupplier, supplierError } = useSelector((state) => state.getSuppliers);

  useEffect(() => {
    dispatch(GetSuppliersAction());
  }, [dispatch]);

  return (
    <div className="p-4">
      {isLoading && <p>Loading...</p>}
      {supplierError && <p className="text-red-500">Error: {supplierError}</p>}
      {!isLoading && !supplierError && (
        <>
          {/* Table for larger screens */}
          <div className="hidden md:block">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                {getSupplier.map((supplier, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                  >
                    <td className="py-2 px-4">{supplier.name}</td>
                    <td className="py-2 px-4">{supplier.email}</td>
                    <td className="py-2 px-4">{supplier.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for mobile screens */}
          <div className="block md:hidden">
            {getSupplier.map((supplier, index) => (
              <div
                key={index}
                className={`p-4 mb-4 border border-gray-300 rounded ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                <p className="font-semibold">Name: {supplier.name}</p>
                <p>Email: {supplier.email}</p>
                <p>Phone: {supplier.phone}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GetSupplierComponent;
