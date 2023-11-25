import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextInput } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import validUrl from 'valid-url'

const PLACEHOLDER_IMG = 'https://www.broenweinraub.com/wp-content/uploads/2017/09/placeholder';

const uploudPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL IS REQUIRED'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit'),
})

const FormikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailURL] = useState(PLACEHOLDER_IMG);

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={values => {
                console.log(values)
                console.log('Ypur post was submitted successfully')
                navigation.goBack();
            }}
            validationSchema={uploudPostSchema}
            validateOnMount={true}
        >
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid,
            }) => (
                <>
                    <View style={{
                        margin: 20,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}
                    >
                        <Image source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG, }}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder="Write a caption..."
                                placeholderTextColor="gray"
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.8} orientation="vertical" />
                    <TextInput
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                        placeholder="Enter Image Url"
                        placeholderTextColor="white"
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
                </>
            )}
        </Formik>
    );
};

export default FormikPostUploader;
